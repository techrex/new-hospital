import Vue from 'vue'
import { timeFormat } from './filter'
import axiosCancelTokenMixin from './axiosCancelTokenMixin'

Vue.filter('timeFormat', timeFormat)

Vue.mixin(axiosCancelTokenMixin)
