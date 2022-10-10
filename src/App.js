import './index.css'
import React from 'react'
import {useState} from 'react'

function App() {

  const [link,setLink] = useState('')
  const [server,setServer] = useState('extra')
  const [language,setLanguage] = useState('arabic')
  const [format,setFormat] = useState('simple')
  const [outputArea,setOutputArea] = useState()

  const generateUser = ()=>{

    const username = link.split('username=')[1].split('&')[0]
    const password = link.split('password=')[1].split('&')[0]
    const url = link.split('/get.php?')[0]
    
    if(language==='arabic' && format==='simple'){
      setOutputArea(`Playlist Name: اي اسم تريده\nUsername: ${username}\nPassword: ${password}\nHost/URL: ${url}`)
    }
    else if(language==='english' && format==='simple'){
      setOutputArea(`Playlist Name: Any name you want\nUsername: ${username}\nPassword: ${password}\nHost/URL: ${url}`)
    
    }
    else if(language==='arabic' && format==='all'){
      setOutputArea(`Playlist Name: اي اسم تريده\nUsername: ${username}\nPassword: ${password}\nHost/URL: ${url}\n\nM3U Link : ${link}`)
    }
    else if(language==='english' && format==='all'){
      setOutputArea(`Playlist Name: Any name you want\nUsername: ${username}\nPassword: ${password}\nHost/URL: ${url}\n\nM3U Link : ${link}`)
    }

  }

  return (
    <div style={{ width: '50%', margin: 'auto', marginTop: 30, }}>
      <div className="mb-6">
        <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">M3U Link</label>
        <input type="text" id="default-input" value={link} onChange={(e)=>setLink(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>

      <div style={{ marginTop: 20, }}>
        <label for="server" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose Server</label>
        <select id="server" onChange={(e)=>setServer(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="extra" selected>Extra</option>
          <option value="mega">Mega</option>
        </select>
      </div>
      <div style={{ marginTop: 20, }}>
        <label for="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose Language</label>
        <select id="language" onChange={(e)=>setLanguage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="arabic" selected>Arabic</option>
          <option value="english">English</option>
        </select>
      </div>
      <div style={{ marginTop: 20, }}>
        <label for="format" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Format</label>
        <select id="format" onChange={(e)=>setFormat(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="simple" selected>Simple</option>
          <option value="all">All</option>
        </select>
      </div>

      <button type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>generateUser()}>Generate</button>

      <textarea id="message" value={outputArea} onChange={(e)=>setOutputArea(e.target.value)} rows="4" class="mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={10} placeholder="Your message..."></textarea>

    </div>
  );
}

export default App;
