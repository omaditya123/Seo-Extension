import React from 'react';
import './App.css';
import { DOMMessage, DOMMessageResponse } from './types';

function App() {
  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [img, setImg] = React.useState(0);
  const [headlines, setHeadlines] = React.useState<string[]>([]);

  React.useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: 'GET_DOM' } as DOMMessage,
        (response: DOMMessageResponse) => {
          setTitle(response.title);
          setHeadlines(response.headlines);
          setImg(response.images);
          setUrl(response.url);
        });
    });
  });

  return (
    <div className="App">
      <h1>SEO Extension</h1>
      <span className={`SEOValidationFieldStatus Error tags`}>
             Not Good for SEO Optimization 
            </span>
      <span className={`SEOValidationFieldStatus Ok tags`}>
              Good for SEO Optimization 
            </span>      
      <ul className="SEOForm">
        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Title</span>
            <span className={`SEOValidationFieldStatus ${title.length < 30 || title.length > 65 ? 'Error' : 'Ok'}`}>
              {title.length} Characters
            </span>
          </div>
          <div className="SEOVAlidationFieldValue">
            {title}
          </div>
        </li>

        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Main Heading</span>
            <span className={`SEOValidationFieldStatus ${headlines.length !== 1 ? 'Error' : 'Ok'}`}>
              {headlines.length}
            </span>
          </div>
          <div className="SEOVAlidationFieldValue">
            <ul>
              {headlines.map((headline, index) => (<li key={index}>{headline}</li>))}
            </ul>
          </div>
        </li>

        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Images</span>
            <span className={`SEOValidationFieldStatus ${img < 10 || img > 30 ? 'Error' : 'Ok'}`}>
              {img} images
            </span>
          </div>
         
        </li>
        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Webpage Url</span>
            <span className={`SEOValidationFieldStatus ${url.length>80 ? 'Error' : 'Ok'}`}>
              {url} 
            </span>
          </div>
         
        </li>
      
      
      </ul>
    </div>
  );
}

export default App;
