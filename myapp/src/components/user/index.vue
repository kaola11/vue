<template>
  <div class="container">
  	<div class="main_content" onload="loaded()">
  		<div id="header"></div>
  		<div id="wrapper">
  			<div class="userHeader">
	    		<div class="header_top">
	    			<div class="circel"></div>
	    			<p>登录查看更多专属优惠活动</p>
	    		</div>
	    		<div class="login_re"><a href="#/login">登录/注册</a></div>
	    	</div>
  		<mt-cell title="我的订单" to="" is-link value="查看全部订单">
</mt-cell>
  		<ul>
  			<router-link v-for="(item,index) in userList" to="" tag="li" :key="index">
  				<i class="iconfont" :class="item.icon"></i>
    			<i>{{item.name}}</i>
  			</router-link>
  		</ul>
  		<mt-cell title="魅力社" to="2" is-link ></mt-cell>
  		<mt-cell title="我的优惠券" to="3" is-link ></mt-cell>
  		<mt-cell title="我关注的品牌" to="4" is-link ></mt-cell>
  		<mt-cell title="我的地址" to="5" is-link ></mt-cell>
  		<mt-cell title="帮助" to="6" is-link ></mt-cell>
  		<mt-cell title="联系我们" to="7" is-link ></mt-cell>
  		</div>
  		<div id="footer"></div>
  		
  	</div>
   
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>