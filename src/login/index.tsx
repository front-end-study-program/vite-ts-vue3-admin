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
            <a-form ref={formRef} model={formState} rules={rules}>
              <a-tabs activeKey={activeKey} onChange={setActiveKey}>
                <a-tab-pane key="account" tab={t('login_tabs_account')}>
                  <a-form-item name="accountVal">
                    <a-input
                      value={formState.accountVal}
                      autocomplete="off"
                      prefix={<UserOutlined />}
                      placeholder={`${t('login_accountInput')}：admin`}
                      onInput={setAccountVal}
                    />
                  </a-form-item>
                  <a-form-item name="password">
                    <a-input-password
                      value={formState.password}
                      autocomplete="off"
                      prefix={<LockOutlined />}
                      placeholder={`${t(
                        'login_passwordInput'
                      )}：admin or ant.design`}
                      onInput={setPassword}
                    />
                  </a-form-item>
                </a-tab-pane>
                <a-tab-pane key="mobile" tab={t('login_tabs_mobile')}>
                  <a-form-item name="mobile">
                    <a-input
                      value={formState.mobile}
                      prefix={<MobileOutlined />}
                      placeholder={`${t('login_mobileInput')}`}
                      onInput={setMobile}
                    />
                  </a-form-item>
                  <a-row type="flex" justify="space-between">
                    <a-col span={16}>
                      <a-form-item name="code">
                        <a-input
                          value={formState.code}
                          prefix={<MailOutlined />}
                          placeholder={`${t('login_codeInput')}`}
                          onInput={setCode}
                        />
                      </a-form-item>
                    </a-col>
                    <a-col span={7} offset={1}>
                      <a-button class="code-btn">{t('login_getCode')}</a-button>
                    </a-col>
                  </a-row>
                </a-tab-pane>
              </a-tabs>
              <a-form-item>
                <a-row type="flex" justify="space-between" align="middle">
                  <a-col>
                    <a-checkbox checked={autoLogin} onChange={setAutoLogin}>
                      {t('login_autoLogin')}
                    </a-checkbox>
                  </a-col>
                  <a-col>
                    <a-button class="link-btn" type="link">
                      {t('login_forgotYourPassword')}
                    </a-button>
                  </a-col>
                </a-row>
              </a-form-item>
              <a-form-item>
                <a-button
                  class="login-btn"
                  type="primary"
                  block
                  onClick={onLogin}
                >
                  {t('login_loginBtn')}
                </a-button>
              </a-form-item>
              <a-form-item>
                <a-row type="flex" justify="space-between" align="middle">
                  <a-col>
                    <a-row>
                      <a-col>
                        <span>{t('login_otherLogin')}</span>
                      </a-col>
                      <a-col>
                        <AlipayCircleOutlined class="other-login-btn" />
                        <TaobaoCircleOutlined class="other-login-btn" />
                        <WeiboCircleOutlined class="other-login-btn" />
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col>
                    <a-button class="link-btn" type="link">
                      {t('login_registerBtn')}
                    </a-button>
                  </a-col>
                </a-row>
              </a-form-item>
            </a-form>
          </div>
          <div class="footer">
            <div class="links">
              <span>帮助</span>
              <span>隐私</span>
              <span>条款</span>
            </div>
            <span>Copyright © 2021 vueComponent</span>
          </div>
        </div>
      </div>
    );
  },
});
