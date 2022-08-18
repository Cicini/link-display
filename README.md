## 说明

原作者(找朋友帮忙写的东西)未对该项目进行上传, 为便于他人使用上传此项目。

## 功能

开发时针对YOURLS的API进行调用，对指定页面生成短链接。

## 使用例

个人搭配[Random ShortURLs](https://yourls.org/)和[Expiry](https://github.com/joshp23/YOURLS-Expiry)(同时开启YOURLS的允许对单一链接生成多个短链接地址的配置)在第三方支持`iframe`插入的答题/问卷平台提供一次性链接，同时使用reference验证防止直接访问调用地址，对某些功能的访问次数做出限制。(虽然是防君子不防小人)

## Config

修改`.env`中URL的值为自己`YOURLS API`调用的地址，你也可以根据自身需要修改参数达到想要的效果。

`URL=https://example.com/yourls-api.php?signature=<apikey>&action=shorturl&url=https://originalsite.com`

## Development

First, run the development server:

```bash
yarn dev
```

## Production

```bash
yarn
yarn build
yarn start
```
