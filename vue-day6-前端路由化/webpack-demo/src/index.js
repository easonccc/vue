import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
$(function(){   
    $('ul li:odd').css('backgroundColor','yellow')
    $('ul li:even').css('backgroundColor','pink')
}) 