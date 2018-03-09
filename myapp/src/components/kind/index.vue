<template>
  <div class="container">
  	<div class="cont">
	    <aside>
	    	<ul>
	    		<router-link v-for="(item,index) in kindList" :key="index" :to="{name:'kindList', params:{classID:index}}" tag = "li">{{item.list.name}}</router-link>
	    	</ul>
	    </aside>
	    <section>  
	    	<!--<ul class="kind_cont">
	    		<router-link v-for="item in kindList[i].list.list" tag="li" :key="item._id" to=""><img :src="item.image" /></router-link>
	    	</ul>-->
		  {{kindList}}--
	    </section>
  	</div>
  </div> 
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>