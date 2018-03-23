 //獲取Cookie例項物件中的元素值
     Cookie[] cookie=request.getCookies();
     String username="";
     String password="";
     if(cookie!=null && cookie.length>0){
      for(Cookie c:cookie){
       if(c.getName().equals("username")){
        username=c.getValue();
       }
       if(c.getName().equals("password")){
        password=c.getValue();
       }
      }
     }
    
  <body>
    <h1>使用者登入</h1>
    <hr>
        <form name="loginForm" action="dologin.jsp" method="post">
       <table>
         <tr>
           <td>使用者名稱：</td>
           <td><input type="text" name="username" value="<%=username %>"/></td>
         </tr>
         <tr>
           <td>密碼：</td>
           <td><input type="password" name="password" value="<%=password %>" /></td>
         </tr>
         <tr>
           <td colspan="2"><input type="checkbox" name="isUseCookie" checked="checked"/>十天內記住我的登入狀態</td>
         </tr>
         <tr>
           <td colspan="2" align="center"><input type="submit" value="登入"/><input type="reset" value="取消"/></td>
         </tr>
       </table>
    </form>
  </body>
