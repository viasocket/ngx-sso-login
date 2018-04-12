# SsoLogin

This project is developed for login via socket by popup option
for further details check `package.json`

## Installation

Install avatar component using [NPM](https://www.npmjs.com/)::

```bash
$ npm install ngx-sso-login --save
```

## Usage

1. Import SsoModule :

Once you have installed ngx-sso-login, you can import it in your `AppModule`:

```typescript
// Import your AvatarModule
import { SsoModule } from 'ngx-sso-login';

@NgModule({
  declarations: [
  ],
  imports: [
    AvatarModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

2. Start using it:

Once the SsoModule is imported, you can start using the component in your Angular application:

```html
<ngx-sso-btn [config]="SSO_CONFIG"></ngx-sso-btn>
```

## Options
```typescript
import { ISsoOptions } from 'ngx-sso-login';

const SSO_CONFIG: ISsoOptions = {
  redirectUri: 'http://localhost:5200/auth',
  tokenKey: 'sokt-auth-token'
}
```

## Release Notes & History
* 1.0 : Package published

## License

MIT © [Sarfaraz Ansari](mailto:sarfaraz@walkover.in)
