import axios from 'axios'
export default {
	actionMessage(context, data){
	    axios.get(data)
          .then(function(response){
            console.log(response.data);
            var result =response.data;
            context.commit({
              type:"changeMessage",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionKindList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data;
            context.commit({
              type:"changeKindList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionListsList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data[4].products;
//          console.log(result);
            context.commit({
              type:"changeListsList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionEventList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data[3].eventList;
            context.commit({
              type:"changeEventList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionBrandList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data[2].brandWall;
            context.commit({
              type:"changeBrandList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionNewList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data[0].newSelect;
            context.commit({
              type:"changeNewList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionDailyList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data[1].dailyImg;
            context.commit({
              type:"changeImgList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionSmallList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.resultList[0].data;
            context.commit({
              type:"changeSmallList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionCouponList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.resultList[1].data;
            context.commit({
              type:"changeCouponList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionListBanner(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.banners;
            context.commit({
              type:"changeListBanner",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.banners;
            context.commit({
              type:"changeBannerList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionHeadList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.lists;
            context.commit({
              type:"changeHeadList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionClassList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.resultList;
            context.commit({
              type:"changeClassList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionGoodsList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.lists[0].events;
            context.commit({
              type:"changeGoodsList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	actionHotList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.lists[1].events;
            context.commit({
              type:"changeHotList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	changeHouseList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.lists[1].events;
            context.commit({
              type:"changeHouseList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	changeDressList(context, data){
	    axios.get(data)
          .then(function(response){
            var result =response.data.resultList[1].events;
            context.commit({
              type:"changeDressList",
              data: result
            })
          }).catch(function(error){
            console.log(error)
          })
	},
	
}
