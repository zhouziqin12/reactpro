import * as types from '../store/types'

let reducer = (state , action)=>{
    let {type , payload} = action ;
    switch(type){
        case  types.GETHOME_SLIDERIMG :
          return Object.assign({},state,{
              home_sliderimg: payload
            });
        case types.GETHOME_LIST :
          return Object.assign({} , state , {
            home_list:payload
          });
        case types.VIEW_LOADING :
        return Object.assign({} , state , {
           loading:payload
        });
        case types.GETHOME_HOTSALE :
        return Object.assign({} , state , {
          home_hotsale:payload
        })
        case types.GETPRODUCT_LEFT :
        return Object.assign({} , state , {
          product_left:payload
        })
        case types.GETPRODUCT_LEFTACTIVE :
        return Object.assign({} , state , {
          product_leftactive:payload
        })
        case types.GETPRODUCT_RIGHTLIST :
        return Object.assign({} , state , {
          product_rightlist:payload
        })
        case types.GETLIST_SHOP :
        return Object.assign({} , state , {
          list_shop:payload
        })
        case types.BFOOT :
        return Object.assign({} , state , {
          bFoot:payload
        })
        case types.ADDSHOP :
        return Object.assign({} , state , {
          addshop:payload
        })
        case types.INCRECOUNT :
        return Object.assign({} , state , {
          count:state.count+=1
        })
        case types.DECRECOUNT :
        return Object.assign({} , state , {
          count:state.count-=1
        })
        case types.CONFIRMADD :
        return Object.assign({} , state , {
          confirmCount:state.confirmCount+=1
        })
        case types.ADDBUYCAR :
        return Object.assign({} , state , {
          addBuycar:state.addBuycar.concat(payload)
        })
        case types.HASUSER :
        return Object.assign({} , state , {
          hasAuth:payload
        })
        default :
          return state ;
    }
}

export default reducer ;