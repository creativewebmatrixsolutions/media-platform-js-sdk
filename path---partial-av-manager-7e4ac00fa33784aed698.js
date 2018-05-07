webpackJsonp([49467461288096],{373:function(t,a){t.exports={data:{site:{siteMetadata:{navigation:[{path:"/",title:"Media Platform JS SDK"},{path:"/api-reference",title:"API reference"},{path:"/callback-functions",title:"Callback functions"},{path:"/file-management",title:"File Management"},{path:"/archive-files",title:"Create and Extract archive files"},{path:"/images",title:"Images"},{path:"/transcode-video",title:"Transcode video"},{path:"/jobs",title:"Jobs"},{path:"/metadata",title:"Metadata"}]}},page:{frontmatter:{layout:null,title:"",include:null},headings:[{depth:1,value:"AV Manager"},{depth:2,value:"transcodeVideo()"},{depth:2,value:"extractPoster()"},{depth:2,value:"extractStoryboard()"},{depth:2,value:"packageVideo()"}],html:'<!-- Generated automatically. Update this documentation by updating the source code. -->\n<h1 id="av-manager"><a href="#av-manager" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AV Manager</h1>\n<h2 id="transcodevideo"><a href="#transcodevideo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>transcodeVideo()</h2>\n<p>Transcode Video</p>\n<div class="method-list">\n  <table>\n    <thead>\n      <tr>\n        <th>ARGUMENTS</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="param">\n          <code>transcodeRequest</code>\n        </td>\n        <td>\n            <div class="type">any</div>\n        </td>\n      </tr>\n      <tr>\n        <td class="param">\n          <code>callback</code>\n        </td>\n        <td>\n            <div class="type">any</div>\n            <p>DEPRECATED! use promise response instead</p>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<h2 id="extractposter"><a href="#extractposter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>extractPoster()</h2>\n<p>Extract Poster</p>\n<div class="method-list">\n  <table>\n    <thead>\n      <tr>\n        <th>ARGUMENTS</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="param">\n          <code>extractPosterRequest</code>\n        </td>\n        <td>\n            <div class="type">any</div>\n        </td>\n      </tr>\n      <tr>\n        <td class="param">\n          <code>callback</code>\n        </td>\n        <td>\n            <div class="type">ExtractPosterCallback</div>\n            <p>DEPRECATED! use promise response instead</p>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class="method-list">\n  <table>\n    <thead>\n      <tr>\n        <th>RETURN VALUE</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="param">\n        </td>\n        <td>\n            <div class="type">Promise&#x3C;ExtractPosterJobResponse></div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<h2 id="extractstoryboard"><a href="#extractstoryboard" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>extractStoryboard()</h2>\n<p>Extract storyboard</p>\n<div class="method-list">\n  <table>\n    <thead>\n      <tr>\n        <th>ARGUMENTS</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="param">\n          <code>extractStoryboardRequest</code>\n        </td>\n        <td>\n            <div class="type">any</div>\n        </td>\n      </tr>\n      <tr>\n        <td class="param">\n          <code>callback</code>\n        </td>\n        <td>\n            <div class="type">ExtractStoryboardCallback</div>\n            <p>DEPRECATED! use promise response instead</p>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class="method-list">\n  <table>\n    <thead>\n      <tr>\n        <th>RETURN VALUE</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="param">\n        </td>\n        <td>\n            <div class="type">Promise&#x3C;ExtractStoryboardJobResponse></div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<h2 id="packagevideo"><a href="#packagevideo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>packageVideo()</h2>\n<p>Packaging Service</p>\n<div class="method-list">\n  <table>\n    <thead>\n      <tr>\n        <th>ARGUMENTS</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="param">\n          <code>PackagingParams</code>\n        </td>\n        <td>\n            <div class="type">params</div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class="method-list">\n  <table>\n    <thead>\n      <tr>\n        <th>RETURN VALUE</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="param">\n        </td>\n        <td>\n            <div class="type">Promise&#x3C;PackagingJobResponse></div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>'}},pathContext:{slug:"/partial/av-manager/"}}}});
//# sourceMappingURL=path---partial-av-manager-7e4ac00fa33784aed698.js.map