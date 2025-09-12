## 使用 HTTPS + 自签证书 (Guide ONLY for macOS)

- 安装工具 `brew install mkcert`

- 让系统信任 mkcert `mkcert -install`

- 签证 `mkcert -cert-file cert.crt -key-file cert.key localhost ::1 127.0.0.1 192.168.169.99`

上面的 `192.168.169.99` 是我的 WLAN 地址，请自行更换。

命令会签出 `cert.crt` 和 `cert.key` 到当前目录下。

看 CRA 的 [HTTPS 攻略](https://create-react-app.dev/docs/using-https-in-development/) ，然后 执行 `yarn devs` 启动，详情启动配置请查看
package.json。



