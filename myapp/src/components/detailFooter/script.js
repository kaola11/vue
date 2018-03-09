
import { KIND_LIST } from  "@/common/index.js"
import axios from "axios"
import { mapState } from 'vuex';
export default {
  data(){
    return {
    	
    }
  },
  mounted(){
    
  },
  methods:{
    cart(listList){
    	var that=this;
    	var str=location.href.split("/")[5];
    	this.listList.map((item,i)=>{
    	if(item.productId==str){ 
    		console.log(item);
    		var url = KIND_LIST + "/users/goods"
    		axios.get(url, {
    			params:{
    				id:item.productId,
    				name:item.productName,
    				img:item.imageUrl,
    				price:item.price
            }
        }).then((response) => {
        	if(response.data==1){
        		alert("加入购物车成功！")
        	}else{
        		alert("加入购物车失败！")
        		
        	}
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
    		console.log(item)
    	}
    })
    }
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
