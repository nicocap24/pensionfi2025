import React, { useState } from 'react'

const Chatbot = () => {
	;(function (d, w, c) {
		w.BrevoConversationsID = '662065def047c532fd52645e'
		w[c] =
			w[c] ||
			function () {
				;(w[c].q = w[c].q || []).push(arguments)
			}
		var s = d.createElement('script')
		s.async = true
		s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js'
		if (d.head) d.head.appendChild(s)
	})(document, window, 'BrevoConversations')

	return <div></div>
}

export default Chatbot
