import {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css';
import bear from '../bear-avatar.png'
import cat from '../cat-avatar.png'
import dog from '../dog-avatar.png'
import fox from '../fox-avatar.png'
import horse from '../horse-avatar.png'
import owl from '../owl-avatar.png'
import penguin from '../penguin-avatar.png'
import pig from '../pig-avatar.png'

const Forum = (props) => {


  return(
  <>
  <h1>Forum</h1>
  <div className="button-container">
    <button onClick={props.toggleNewPostForm}>New Post</button>
  </div>
  {props.seeNewPostForm ? <form onSubmit={props.newPostSubmit}>
         Username: <input type="text" onChange={props.newUsernameChange}/><br/>
         Avatar:
        <div className="radio-img-container">

          <input className="inputImg" type="radio" id="radioImgOne" name="img" value={bear} onChange={props.newAvatarChange}/>
          <label for="radioImgOne"><img className="radio-image" src={bear}/></label>

          <input className="inputImg" type="radio" id="radioImgTwo" name="img" value={cat} onChange={props.newAvatarChange}/>
          <label for="radioImgTwo"><img className="radio-image" src={cat}/></label>


          <input className="inputImg" type="radio" id="radioImgThree" name="img" value={dog} onChange={props.newAvatarChange}/>
          <label for="radioImgThree"><img className="radio-image" src={dog}/></label>

          <input className="inputImg" type="radio" id="radioImgFour" name="img" value={fox} onChange={props.newAvatarChange}/>
          <label for="radioImgFour"><img className="radio-image" src={fox}/></label>

          <input className="inputImg" type="radio" id="radioImgFive" name="img" value={horse} onChange={props.newAvatarChange}/>
          <label for="radioImgFive"><img className="radio-image" src={horse}/></label>

          <input className="inputImg" type="radio" id="radioImgSix" name="img" value={owl} onChange={props.newAvatarChange}/>
          <label for="radioImgSix"><img className="radio-image" src={owl}/></label>

          <input className="inputImg" type="radio" id="radioImgSeven" name="img" value={penguin} onChange={props.newAvatarChange}/>
          <label for="radioImgSeven"><img className="radio-image" src={penguin}/></label>

          <input className="inputImg" type="radio" id="radioImgEight" name="img" value={pig} onChange={props.newAvatarChange}/>
          <label for="radioImgEight"><img className="radio-image" src={pig}/></label>

        </div>
         Comment: <textarea type="text" onChange={props.newCommentChange}/><br/>

         <div class="emoji-container">
 			     Pick an emoji
 			     <div class="emoji-input-container">

             <input type="radio" id="radioEmojiOne" name="emoji" value="😭" onChange={props.newEmojiChange}/>
             <label for="radioEmojiOne" className="emojiRadio">😭</label>

             <input type="radio" id="radioEmojiTwo" name="emoji" value="😢" onChange={props.newEmojiChange}/>
             <label for="radioEmojiTwo" className="emojiRadio">😢</label>

             <input type="radio" id="radioEmojiThree" name="emoji" value="😥" onChange={props.newEmojiChange}/>
            <label for="radioEmojiThree" className="emojiRadio">😥</label>

            <input type="radio" id="radioEmojiFour" name="emoji" value="😔" onChange={props.newEmojiChange}/>
            <label for="radioEmojiFour" className="emojiRadio">😔</label>

            <input type="radio" id="radioEmojiFive" name="emoji" value="🙁" onChange={props.newEmojiChange}/>
            <label for="radioEmojiFive" className="emojiRadio">🙁</label>

            <input type="radio" id="radioEmojiSix" name="emoji" value="😡" onChange={props.newEmojiChange}/>
            <label for="radioEmojiSix" className="emojiRadio">😡</label>

            <input type="radio" id="radioEmojiSeven" name="emoji" value="😁" onChange={props.newEmojiChange}/>
            <label for="radioEmojiSeven" className="emojiRadio">😁</label>

            <input type="radio" id="radioEmojiEight" name="emoji" value="🙏" onChange={props.newEmojiChange}/>
            <label for="radioEmojiEight" className="emojiRadio">🙏</label>
 			   </div>
 			</div>
         <input className="button" type="submit" value="Create Post"/>
     </form> : ""}
  {props.forum.map((forum) => {
    return (
  		<div className="forum-card" key={forum._id}>
  		  <h3>{forum.username}</h3>
  		  <img src={forum.avatar}/>
  		  <p>{forum.comment}</p>
  		  <p>{forum.emoji}</p>

        {forum._id === props.editPost._id ?
               props.seeUpdatePostForm ?
               <div className="updatePost">
                  <form onSubmit={(event) => {props.postUpdate(event, forum)}}>
                    Username: <input type="text" onChange={props.newUsernameChange} placeholder={forum.username}/><br/>

                    Avatar:
                   <div className="radio-img-container">

                     <input className="inputImg" type="radio" id="radioImgOne" name="img" value={bear} onChange={props.newAvatarChange}/>
                     <label for="radioImgOne"><img className="radio-image" src={bear}/></label>

                     <input className="inputImg" type="radio" id="radioImgTwo" name="img" value={cat} onChange={props.newAvatarChange}/>
                     <label for="radioImgTwo"><img className="radio-image" src={cat}/></label>


                     <input className="inputImg" type="radio" id="radioImgThree" name="img" value={dog} onChange={props.newAvatarChange}/>
                     <label for="radioImgThree"><img className="radio-image" src={dog}/></label>

                     <input className="inputImg" type="radio" id="radioImgFour" name="img" value={fox} onChange={props.newAvatarChange}/>
                     <label for="radioImgFour"><img className="radio-image" src={fox}/></label>

                     <input className="inputImg" type="radio" id="radioImgFive" name="img" value={horse} onChange={props.newAvatarChange}/>
                     <label for="radioImgFive"><img className="radio-image" src={horse}/></label>

                     <input className="inputImg" type="radio" id="radioImgSix" name="img" value={owl} onChange={props.newAvatarChange}/>
                     <label for="radioImgSix"><img className="radio-image" src={owl}/></label>

                     <input className="inputImg" type="radio" id="radioImgSeven" name="img" value={penguin} onChange={props.newAvatarChange}/>
                     <label for="radioImgSeven"><img className="radio-image" src={penguin}/></label>

                     <input className="inputImg" type="radio" id="radioImgEight" name="img" value={pig} onChange={props.newAvatarChange}/>
                     <label for="radioImgEight"><img className="radio-image" src={pig}/></label>

                   </div>

                     Comment: <textarea placeholder={forum.comment} type="text" onChange={props.newCommentChange}/><br/>

                    <div class="emoji-container">
            			     Pick an emoji
            			     <div class="emoji-input-container">

                        <input type="radio" id="radioEmojiOne" name="emoji" value="😭" onChange={props.newEmojiChange}/>
                        <label for="radioEmojiOne" className="emojiRadio">😭</label>

                        <input type="radio" id="radioEmojiTwo" name="emoji" value="😢" onChange={props.newEmojiChange}/>
                        <label for="radioEmojiTwo" className="emojiRadio">😢</label>

                        <input type="radio" id="radioEmojiThree" name="emoji" value="😥" onChange={props.newEmojiChange}/>
                       <label for="radioEmojiThree" className="emojiRadio">😥</label>

                       <input type="radio" id="radioEmojiFour" name="emoji" value="😔" onChange={props.newEmojiChange}/>
                       <label for="radioEmojiFour" className="emojiRadio">😔</label>

                       <input type="radio" id="radioEmojiFive" name="emoji" value="🙁" onChange={props.newEmojiChange}/>
                       <label for="radioEmojiFive" className="emojiRadio">🙁</label>

                       <input type="radio" id="radioEmojiSix" name="emoji" value="😡" onChange={props.newEmojiChange}/>
                       <label for="radioEmojiSix" className="emojiRadio">😡</label>

                       <input type="radio" id="radioEmojiSeven" name="emoji" value="😁" onChange={props.newEmojiChange}/>
                       <label for="radioEmojiSeven" className="emojiRadio">😁</label>

                       <input type="radio" id="radioEmojiEight" name="emoji" value="🙏" onChange={props.newEmojiChange}/>
                       <label for="radioEmojiEight" className="emojiRadio">🙏</label>
            			   </div>
            			</div>
                  <input className="button" type="submit" value="Save Updates"/>
                </form>
                <button onClick={props.toggleUpdatePostForm}>Cancel</button>
              </div>
               : null
             : null}
             {forum._id !== props.editPost._id ?
                  !props.seeUpdatePostForm ?
                <button onClick={(event) => {props.assignEditPost(forum)}}>Update</button>
                : null
              : null}
              <button onClick={(event) => {props.postDelete(forum)}}>Delete</button>

  		</div>
  	 )
    })}
    </>
  )
}


export default Forum
