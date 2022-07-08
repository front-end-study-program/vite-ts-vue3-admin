import { defineComponent, ref } from 'vue';
import styles from './index.module.less';
import { useI18n } from 'vue-i18n';
import LocalSetting from '@/components/LocalSetting';
import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  MailOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons-vue';
import { useCheckboxVal } from '@/hooks';
import { useLoginForm } from './hooks/useLoginForm';
import {
  Button,
  Form,
  FormItem,
  Tabs,
  Input,
  InputPassword,
  Row,
  Col,
  Checkbox,
} from 'ant-design-vue';

const { TabPane } = Tabs;

export default defineComponent({
  name: 'Login',
  setup() {
    const { t } = useI18n();

    const formRef = ref(null);

    const {
      formState,
      activeKey,
      setActiveKey,
      setAccountVal,
      setPassword,
      setMobile,
      setCode,
      rules,
      onLogin,
    } = useLoginForm(formRef);

    const [autoLogin, setAutoLogin] = useCheckboxVal(false);

    return () => (
      <div class={styles.loginWrapper}>
        <div class={styles.loginWrapperSettings}>
          <LocalSetting />
        </div>
        <div class="login-layout">
          <div class="header">
            <a href="/">
              <img
                class="logo"
                src="https://preview.pro.antdv.com/assets/logo.f3103225.svg"
                alt=""
              />
              <span class="title">Ant Design</span>
            </a>
            <div class="desc">{t('login_desc')}</div>
          </div>
          <div class="main">
            <Form ref={formRef} model={formState} rules={rules}>
              <Tabs activeKey={activeKey.value} onChange={setActiveKey}>
                <TabPane key="account" tab={t('login_tabs_account')}>
                  <FormItem name="accountVal">
                    <Input
                      value={formState.accountVal}
                      prefix={<UserOutlined />}
                      placeholder={`${t('login_accountInput')}：admin`}
                      onInput={setAccountVal}
                    />
                  </FormItem>
                  <FormItem name="password">
                    <InputPassword
                      value={formState.password}
                      prefix={<LockOutlined />}
                      placeholder={`${t(
                        'login_passwordInput'
                      )}：admin or ant.design`}
                      onInput={setPassword}
                    />
                  </FormItem>
                </TabPane>
                <TabPane key="mobile" tab={t('login_tabs_mobile')}>
                  <FormItem name="mobile">
                    <Input
                      value={formState.mobile}
                      prefix={<MobileOutlined />}
                      placeholder={`${t('login_mobileInput')}`}
                      onInput={setMobile}
                    />
                  </FormItem>
                  <Row type="flex" justify="space-between">
                    <Col span={16}>
                      <FormItem name="code">
                        <Input
                          value={formState.code}
                          prefix={<MailOutlined />}
                          placeholder={`${t('login_codeInput')}`}
                          onInput={setCode}
                        />
                      </FormItem>
                    </Col>
                    <Col span={7} offset={1}>
                      <Button class="code-btn">{t('login_getCode')}</Button>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
              <FormItem>
                <Row type="flex" justify="space-between" align="middle">
                  <Col>
                    <Checkbox checked={autoLogin.value} onChange={setAutoLogin}>
                      {t('login_autoLogin')}
                    </Checkbox>
                  </Col>
                  <Col>
                    <Button class="link-btn" type="link">
                      {t('login_forgotYourPassword')}
                    </Button>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button
                  class="login-btn"
                  type="primary"
                  block
                  onClick={onLogin}
                >
                  {t('login_loginBtn')}
                </Button>
              </FormItem>
              <FormItem>
                <Row type="flex" justify="space-between" align="middle">
                  <Col>
                    <Row>
                      <Col>
                        <span>{t('login_otherLogin')}</span>
                      </Col>
                      <Col>
                        <AlipayCircleOutlined class="other-login-btn" />
                        <TaobaoCircleOutlined class="other-login-btn" />
                        <WeiboCircleOutlined class="other-login-btn" />
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Button class="link-btn" type="link">
                      {t('login_registerBtn')}
                    </Button>
                  </Col>
                </Row>
              </FormItem>
            </Form>
          </div>
          <div class="footer">
            <div class="links">
              <span>帮助</span>
              <span>隐私</span>
              <span>条款</span>
            </div>
            <span>Copyright © 2022 vueComponent</span>
          </div>
        </div>
      </div>
    );
  },
});
