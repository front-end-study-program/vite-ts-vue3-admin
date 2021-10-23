import { reactive, Ref } from 'vue';
import { useInputVal, useTabVal } from '@/hooks';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { login } from '@/api/login';
import { setToken } from '@/utils/user';
import { useRouter } from 'vue-router';

export interface IFormState {
  accountVal: string;
  password: string;
  mobile: string;
  code: string;
}

export interface ILoginFormData {
  formState: IFormState;
  [propName: string]: any;
}

export function useLoginForm(formRef: Ref): ILoginFormData {
  const [activeKey, setActiveKey] = useTabVal('account');
  const [accountVal, setAccountVal] = useInputVal('');
  const [password, setPassword] = useInputVal('');
  const [mobile, setMobile] = useInputVal('');
  const [code, setCode] = useInputVal('');

  const formState = reactive({ accountVal, password, mobile, code });

  const rules = {
    accountVal: [
      {
        required: true,
        message: 'Please enter account name or email address',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: 'Please enter your password!',
        trigger: 'blur',
      },
    ],
    mobile: [
      {
        required: true,
        message: 'Mobile number',
        trigger: 'blur',
      },
    ],
    code: [
      {
        required: true,
        message: 'Please enter the verification code!',
        trigger: 'blur',
      },
    ],
  };

  const router = useRouter();
  const onLogin = () => {
    const namePath =
      activeKey.value === 'account'
        ? ['accountVal', 'password']
        : ['mobile', 'code'];
    formRef.value
      .validate(namePath)
      .then(async () => {
        const res = await login({
          accountVal: formState.accountVal,
          password: formState.password,
          mobile: formState.mobile,
          code: formState.code,
        });
        if (!res?.data) return;
        setToken(res.data);
        router.push({
          path: '/dashboard',
        });
      })
      .catch((error: ValidateErrorEntity<IFormState>) => {
        console.log('error', error);
      });
  };

  return {
    formState,
    rules,
    setAccountVal,
    setPassword,
    setMobile,
    setCode,
    activeKey,
    setActiveKey,
    onLogin,
  };
}
