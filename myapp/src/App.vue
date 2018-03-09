<template>
  <div id="app">
 		<router-view name='header'></router-view>
 		<router-view name='content'></router-view>
 		<router-view name='footer'></router-view>    
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">
@import "~@/lib/reset.scss";

#app,html,body{
	@include rect(100%,100%);
	
}
.router-link-active i{
	color:#000;
}




#app{
	@include flexbox();
	@include flex-direction(column);	
	.content{
		@include flex();
		@include flexbox();
		overflow-y:auto;
    @include rect(100%,auto);
	}
	.container{
		@include flex();
		overflow-y:auto;
		@include flex-direction(column);
		@include rect(100%,auto)
	}
	footer{
	  @include rect(100%, 0.5rem);
	  @include background-color(#eee);
	  @include text-color(#333);
	  ul{
	    @include rect(100%,100%);
      @include flexbox();
	    li{
	       @include flex();
	       @include flexbox();
	       @include justify-content(center);
	       @include align-items(center);
				@include flex-direction(column);	
				/*@include text-color(red);*/
	      .iconfont{
	      	@include font-size(0.24rem);
	      	border:0;
	      } 
	    }
	    .router-link-active{
	    	i{
	    		@include text-color(red);
	    	}
	    	
	    }
	  }
    }
    
}



</style>
