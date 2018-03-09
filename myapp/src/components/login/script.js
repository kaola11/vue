import Vue from 'vue'
import { Field,Button,Toast  } from 'mint-ui';

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

import axios from "axios"
import {KIND_LIST} from  "@/common"



export default {
  data(){
    return {
      sharList:[
      {path:'/home',icon:"icon-tao"},
      {path:'/kind',icon:"icon-weixin"},
      {path:'/daily',icon:'icon-zhifubao2'},
      {path:'/cart',icon:'icon-weibo'},
      ],
      password:"",
      phone:"",
      phoneState:"",
      passwordState:"",
      msg:"发送验证码",
      timer:"",
      codeState: false,
      registerState: "default"
    }
  },
  mounted(){
    
  },
  methods:{
  	 validatePhone(phone){
    	var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if(reg.test(phone)){
        this.phoneState = "success"
      }else{
        this.phoneState = "error"
      }
    },
    validatePassword(password){
    	var regg = /^\w{4,10}$/;
      if(this.phone == ""){
        this.phoneState = "error"
      }
      if(regg.test(password)){
        this.passwordState = "success"
      }else{
        this.passwordState = "error"
      }
    },
    sendCode(){
      var num = 5;
      clearInterval(this.timer);
    this.timer =  setInterval(() =>{
        if(num == 0){
          num = 5;
          clearInterval(this.timer);
          this.msg = "发送验证码";
          this.codeState = false
        }else{
          this.msg = num + "s后重新发送";
          this.codeState = true
        }
        num--;
      },1000)
      
    },
    register(){
      var that = this;
      if(this.phone == ""){
        this.phoneState = "error"
      }else{
        if(this.password == ""){
          this.passwordState = "error"
        }else{
          
            //提交数据到服务器，进行验证
            var url = KIND_LIST + "/users/login"
            axios.get(url, {
              params:{
              phone:that.phone,
              password: that.password,
              
            }
            }).then((response) => {
            	if(response.data==1){
            		location.href="#/home"
            	}else{
            		alert("用户名或密码不正确！")
            	}
              console.log(response)
            }).catch((error) => {
              console.log(error)
            })
          }
        }
      }
      
    
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    phone(newVal,oldVal){
      if(newVal == ""){
        this.registerState = "default"
      }else{
         this.registerState = "primary"
          this.validatePhone(newVal)
      }
     
    },
    password(newVal,oldVal){
      this.validatePassword(newVal)
    }
  }
}