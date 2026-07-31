
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
    var frame=document.createElement('iframe');
    var close=document.createElement('button');
    frame.src='https://music.163.com/outchain/player?type=2&id='+encodeURIComponent(card.dataset.soundId)+'&auto='+(mobileSoundPlayback?'0':'1')+'&height=66';
    frame.title=card.querySelector('h3').textContent+'——网易云音乐外链播放器';
    frame.loading='lazy';
    frame.allow='autoplay; encrypted-media';
    close.type='button';
    close.className='sound-submerge';
    close.textContent='沉回水下';
    close.addEventListener('click',function(){submergeSound(card,true);});
    player.appendChild(frame);
    if(mobileSoundPlayback){
      var hint=document.createElement('p');
      hint.className='sound-mobile-hint';
      hint.textContent='手机浏览器会阻止带声音的自动播放；请在上方播放器中再点一次播放。';
      player.appendChild(hint);
    }
    player.appendChild(close);
    card.dataset.loaded='true';
    card.classList.remove('has-echo');
    activeSoundCard=card;
    player.setAttribute('tabindex','-1');
    player.focus({preventScroll:true});
  });
});
