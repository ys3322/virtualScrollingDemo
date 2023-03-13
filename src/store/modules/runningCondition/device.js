import { getSbyxData } from "../../../api/device";

// initial state
const state = () => ({
  // 详情列表
  sbyxList: [],
});

// getters
const getters = {
  sbyxList: (state) => state.sbyxList,
};

// actions
const actions = {

  // 设备越限 详情数据
  // kind：类型描述，1表示主变，2表示线路
  // voltageName：电压等级描述，目前有35kV,110kV，220kV
  async getSbyxList({ commit, state }) {
    try {
      const [err,data] = await getSbyxData({
        kind: state.kind,
        voltageName: state.voltageName,
      });
      const sbyxList = data.data
      sbyxList.forEach((item, index) => {
        // 不满2位前面补0
        item.index = (index + 1).toString().padStart(2, "0");
      });
      // console.log('yangs=> sbyxList', sbyxList)
      commit("setSbyxList", sbyxList);
    } catch (err) {
      console.error("setSbyxList: err", err);
    }
  },
};

// mutations
const mutations = {
  setSbyxList(state, sbyxList) {
    state.sbyxList = sbyxList;
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
