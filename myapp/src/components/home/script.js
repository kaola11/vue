import Vue from 'vue'
//import Scroll from '@/base/scroll/scroll'
import axios from "axios"
import { BANNER_URL,HEAD_LIST,COUPON_LIST,GOODS_LIST } from '@/common/index.js'
import { Swipe, SwipeItem } from 'mint-ui';
import { mapState } from 'vuex';


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data(){
    return {
    }
  },
  mounted(){
    var url=BANNER_URL;
    var urlList=HEAD_LIST;
    var couponUrl=COUPON_LIST;
    var goodsUrl=GOODS_LIST;
    var that=this;
    this.$store.dispatch("actionList", url);
    this.$store.dispatch("actionHeadList", urlList);
    this.$store.dispatch("actionClassList", couponUrl);
    this.$store.dispatch("actionGoodsList", goodsUrl);
    this.$store.dispatch("actionHotList", goodsUrl);
    
    
    if (window.history && window.history.pushState) {
       window.addEventListener('popstate', function () {
          window.history.pushState('forward', null, '#/');
            window.history.forward(1);
      });
  	}

      window.history.pushState('forward', null, '#/'); //在IE中必须得有这两行
      window.history.forward(1);
    
    
    
  },
  methods:{
    
  },
  computed:{
  	newMsg(){},
  	...mapState({
  		list:"list",
  		headList:"headList",
  		couponList:"couponList",
  		goodsList:"goodsList",
  		hotList:"hotList"
  	})
  },
  components:{
//  Scroll
  },
  watch:{
    
  }
}
