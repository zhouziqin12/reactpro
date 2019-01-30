import * as types from '../store/types';

  export let asyncActionHomeSliderImg=(url,dispatch,type)=>{
    fetch(
      url,
    ).then(
      res=>res.json()
    ).then(
      data=>{
       setTimeout(()=>{
        dispatch({type:types.VIEW_LOADING,payload:false})
        dispatch({type:type,payload:data})
       },1000)
      }
    )
     return {type:types.VIEW_LOADING,payload:true};
  };
  export let asyncActionHomeList=(url,dispatch,type)=>{
    fetch(
      url,
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false})
        dispatch({type:type,payload:data})
      }
    )
    return {type:types.VIEW_LOADING,payload:true};
  };
  export let asyncActionHomeHotSale=(url,dispatch,type)=>{
    fetch(
      url,
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false})
        dispatch({type:type,payload:data})
      }
    )
    return {type:types.VIEW_LOADING,payload:true};
  };
  export let asyncActionProductLeft=(url,dispatch,type)=>{
    fetch(
      url,
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false})
        dispatch({type:type,payload:data})
      }
    )
    return {type:types.VIEW_LOADING,payload:true};
  };
  export let asyncActionProductRightList=(url,dispatch,type)=>{
    fetch(
      url,
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false})
        dispatch({type:type,payload:data})
      }
    )
    return {type:types.VIEW_LOADING,payload:true};
  };
  export let asyncActionGetListShop=(url,dispatch,type)=>{
    fetch(
      url,
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false})
        dispatch({type:type,payload:data})
      }
    )
    return {type:types.VIEW_LOADING,payload:true};
  };
  export let asyncActionBeginQingQiu=(url,dispatch,type)=>{
    fetch(
      url,
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false})
        dispatch({type:type,payload:data[0].hasAuth})
      }
    )
    return {type:types.VIEW_LOADING,payload:true};
  };
