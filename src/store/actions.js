// action也是函数
export function setPageTitle () {
  return (dispatch) => {
    let result = 'redux-demo'
    dispatch({ type: 'SET_PAGE_TITLE', data: result })
  }
}

export function setInfoList () {
  return (dispatch) => {
    // 使用fetch实现异步请求
    // window.fetch('/api/getInfoList', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => {
    //     return res.json()
    // }).then(data => {
    //     let { code, data } = data
    //     if (code === 0) {
    //         dispatch({ type: 'SET_INFO_LIST', data: data })
    //     }
    // })
    let result = [
      {
        id: 1,
        name: 'lucy'
      },
      {
        id: 2,
        name: 'dave'
      }
    ]
    dispatch({ type: 'SET_INFO_LIST', data: result })
  }
}
