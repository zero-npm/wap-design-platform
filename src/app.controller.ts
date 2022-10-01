import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
let ejs = require('ejs')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res,@Req() req) {
    const { pageType } = req.query
    console.log(pageType)
  /**
   * 1.如果是文本，可获取文本来源或者字符串
   * 2.如果是a标签或者是表单，定义表单逻辑
   */
    let pageConfig:any = [
      {
        label:'div',
        style:{},
        text:"文本内容",
      },
      {
        label:'br'
      },
      {
        label:'a',
        style:{},
        text:"${a.name}",
        params:{
          id:1,
          name:5
        } //请求参数
      },
      {
        label:'a',
        style:{},
        text:"文本内容",
        params:{
          id:2
        } //请求参数
      },
      {
        label:'image',
        style:{},
        src:"static/test.jpg",
      },
      {
        label:'form',
        formConfig: [
          {
            label: 'input',
            type: 'text',
            key: 'username',
            name: '账 号：',
          },
          {
            label: 'input',
            type: 'number',
            key: 'password',
            name: '密 码：',
          },
          {
            label: 'input',
            type: 'submit',
            name: '',
          }
        ]
      }
    ]
    pageConfig = pageConfig.map(item=>{
      if(item.label==='a'){
        const entity = Object.entries(item.params || {})
        item.href = '/?'
        entity.forEach((params,index)=>{
          item.href += params.join("=")
          index < entity.length - 1 ? item.href += "&":''
        })
      }
      return item
    })
    let html = ejs.render(`<% pageConfig.forEach(function(item){ %>
      <<%=item.label%> href="<%=item.href%>" src="<%=item.src%>" width="100" height="100" action="/">
      <% if(item.label != 'form') {%>
        <%= item.text %>
      <% } %>
      <% if(item.label == 'form') {%>
        <% item.formConfig.forEach((formItem,index)=>{ %>
          <%=formItem.name%><<%=formItem.label%> type="<%=formItem.type%>" name="<%=formItem.key%>"%>/><br>
        <% }) %>
      <% } %>
        
      </<%=item.label%>>
    <% }); %>`, {pageConfig: pageConfig});
    res.send(html)
  }
}
