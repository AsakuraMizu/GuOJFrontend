import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import zhHans from 'vuetify/src/locale/zh-Hans';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { zhHans },
        current: 'zh-Hans',
    },
    icons: {
        iconfont: 'mdi',
    },
});
