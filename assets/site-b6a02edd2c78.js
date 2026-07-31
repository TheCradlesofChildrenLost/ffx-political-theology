
var activeSoundCard=null;
function soundMediaUrl(id){
  return 'https://music.163.com/song/media/outer/url?id='+encodeURIComponent(id)+'.mp3';
}
function requestSoundPlay(audio,status,fallback){
  var attempt=audio.play();
  if(attempt&&typeof attempt.catch==='function'){
    attempt.catch(function(){status.textContent=fallback;});
  }
}
function submergeSound(card,restoreFocus){
  var player=card.querySelector('.sound-player');
  var button=card.querySelector('.sound-load');
  var audio=player.querySelector('audio');
  if(audio){
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
  }
  player.replaceChildren();
  card.dataset.loaded='false';
  card.dataset.sequenceAdvanced='false';
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
    var audio=document.createElement('audio');
    var status=document.createElement('p');
    var close=document.createElement('button');
    var firstTitle=card.querySelector('h3').textContent;
    var nextId=card.dataset.nextSoundId||'';
    var nextTitle=card.dataset.nextSoundTitle||'';
    audio.controls=true;
    audio.preload='metadata';
    audio.playsInline=true;
    audio.src=soundMediaUrl(card.dataset.soundId);
    audio.setAttribute('aria-label',firstTitle+'——网易云音乐原生音频播放器');
    status.className='sound-mobile-hint';
    status.textContent=nextId?'正在载入 '+firstTitle+'；结束后接续《'+nextTitle+'》。':'正在载入 '+firstTitle+'。';
    audio.addEventListener('playing',function(){
      status.classList.remove('is-error');
      status.textContent=card.dataset.sequenceAdvanced==='true'?'正在接续播放《'+nextTitle+'》。':(nextId?'正在播放 '+firstTitle+'；结束后接续《'+nextTitle+'》。':'正在播放 '+firstTitle+'。');
    });
    audio.addEventListener('ended',function(){
      if(!nextId||card.dataset.sequenceAdvanced==='true'){
        status.textContent='声音已经沉入水下。';
        return;
      }
      card.dataset.sequenceAdvanced='true';
      audio.src=soundMediaUrl(nextId);
      audio.setAttribute('aria-label','《'+nextTitle+'》——网易云音乐原生音频播放器');
      status.textContent='接续载入《'+nextTitle+'》。';
      audio.load();
      requestSoundPlay(audio,status,'《'+nextTitle+'》已经就绪，请点播放键继续。');
    });
    audio.addEventListener('error',function(){
      status.classList.add('is-error');
      status.textContent='网易云暂未返回'+(card.dataset.sequenceAdvanced==='true'?'《'+nextTitle+'》':'这首音频')+'；可稍后重新浮出水面。';
    });
    close.type='button';
    close.className='sound-submerge';
    close.textContent='沉回水下';
    close.addEventListener('click',function(){submergeSound(card,true);});
    player.append(audio,status,close);
    card.dataset.loaded='true';
    card.dataset.sequenceAdvanced='false';
    card.classList.remove('has-echo');
    activeSoundCard=card;
    player.setAttribute('tabindex','-1');
    requestSoundPlay(audio,status,'浏览器等待你的确认，请点上方播放键。');
  });
});
