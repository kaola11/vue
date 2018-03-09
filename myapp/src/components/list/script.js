import Vue from 'vue'


import { BANNER_LIST,SMALL_LIST,NEW_LIST } from '@/common/index.js'
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
    var url=BANNER_LIST;
    var smallUrl=SMALL_LIST;
    var newUrl=NEW_LIST;
    var that=this;
    this.$store.dispatch("actionListBanner", url);
    this.$store.dispatch("actionSmallList", smallUrl);
    this.$store.dispatch("actionCouponList", smallUrl);
    this.$store.dispatch("actionNewList", newUrl);
    this.$store.dispatch("actionDailyList", newUrl);
    this.$store.dispatch("actionBrandList", newUrl);
    this.$store.dispatch("actionEventList", newUrl);
    
    
  },
  methods:{
    
  },
  computed:{
  	newMsg(){},
  	...mapState({
  		listBanner:"listBanner",
  		headList:"headList",
  		smallList:"smallList",
  		newList:"newList",
  		imgList:"imgList",
  		brandList:"brandList",
  		eventList:"eventList"
  	})
  },
  components:{
    
  },
  watch:{
    
  }
  
}
