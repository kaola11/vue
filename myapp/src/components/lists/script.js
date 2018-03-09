import Vue from 'vue'
import { NEW_LIST,KIND_LIST } from '@/common/index.js'
import { mapState } from 'vuex';


export default {
	props:["classID"],
  data(){
    return {
      
    }
  },
  mounted(){
     var newUrl=NEW_LIST;
    this.$store.dispatch("actionListsList", newUrl);
     
  },
  methods:{
  	
  },
  computed:{
    newMsg(){},
  	...mapState({
  		listList:"listList",
  	})
  },
  components:{
    
  },
  watch:{
    
  }
}
