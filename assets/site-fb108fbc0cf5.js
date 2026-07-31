
var activeSoundCard=null;
var mobileSoundPlayback=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent||'')||window.matchMedia('(hover: none) and (pointer: coarse)').matches||renderProfile==='android';
function submergeSound(card,restoreFocus){
  var player=card.querySelector('.sound-player');
  var button=card.querySelector('.sound-load');
  player.replaceChildren();
  card.dataset.loaded='false';
  card.classList.add('has-echo');
  button.textContent='再次让声音浮出水面';
  if(activeSoundCard===card)activeSoundCard=null;
  if(restoreFocus)button.focus({preventScroll:true});
}
document.querySelectorAll('.sound-threshold').forEach(function(card){
  var button=card.querySelector('.sound-load');
  var player=card.querySelector('.sound-player');
  button.addEventListener('click',function(){
    if(card.dataset.loaded==='true')return;
    if(activeSoundCard&&activeSoundCard!==card)submergeSound(activeSoundCard,false);
    var close=document.createElement('button');
    close.type='button';
    close.className='sound-submerge';
    close.textContent='沉回水下';
    close.addEventListener('click',function(){submergeSound(card,true);});
    if(mobileSoundPlayback){
      var audio=document.createElement('audio');
      var hint=document.createElement('p');
      audio.controls=true;
      audio.preload='metadata';
      audio.playsInline=true;
      audio.src='https://music.163.com/song/media/outer/url?id='+encodeURIComponent(card.dataset.soundId)+'.mp3';
      audio.setAttribute('aria-label',card.querySelector('h3').textContent+'——网易云音乐原生音频播放器');
      hint.className='sound-mobile-hint';
      hint.textContent='手机端使用原生播放器；若声音未自动开始，请点播放键。';
      audio.addEventListener('error',function(){
        hint.classList.add('is-error');
        hint.textContent='网易云暂未返回这首音频；可稍后重新浮出水面。';
      });
      player.append(audio,hint);
      var playAttempt=audio.play();
      if(playAttempt&&typeof playAttempt.catch==='function'){
        playAttempt.catch(function(){hint.textContent='浏览器等待你的确认，请点上方播放键。';});
      }
    }else{
      var frame=document.createElement('iframe');
      frame.src='https://music.163.com/outchain/player?type=2&id='+encodeURIComponent(card.dataset.soundId)+'&auto=1&height=66';
      frame.title=card.querySelector('h3').textContent+'——网易云音乐外链播放器';
      frame.loading='eager';
      frame.allow='autoplay; encrypted-media; fullscreen';
      frame.referrerPolicy='strict-origin-when-cross-origin';
      player.appendChild(frame);
    }
    player.appendChild(close);
    card.dataset.loaded='true';
    card.classList.remove('has-echo');
    activeSoundCard=card;
    player.setAttribute('tabindex','-1');
    if(!mobileSoundPlayback)player.focus({preventScroll:true});
  });
});
