import {mapState} from "vuex"
import { KIND_LIST } from  "@/common/index.js"
import axios from "axios"

export default {
  data(){
    return {
      
    }
  },
  mounted(){
    var url=KIND_LIST+"/cart";
    this.$store.dispatch("actionMessage", url);
    
  },
  methods:{
  
   /* dele(message){
    	var url = KIND_LIST + "/users/goods"
    	axios.get(url, {
    		params:{
					message:""
        }
    	}
    }*/
  },
  computed:{
    newMsg(){},
  	...mapState({
  		message:"message",
  	})
  },
  components:{
    
  },
  watch:{
    
  }
}
