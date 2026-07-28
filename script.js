const m=document.getElementById('modal');
document.getElementById('donateBtn').onclick=()=>m.style.display='flex';
document.getElementById('close').onclick=()=>m.style.display='none';
window.onclick=e=>{if(e.target===m)m.style.display='none';}
document.querySelectorAll('.copy').forEach(b=>{
 b.onclick=()=>{
   navigator.clipboard.writeText(b.dataset.copy);
   const t=b.textContent;
   b.textContent='تم النسخ ✓';
   setTimeout(()=>b.textContent=t,1500);
 }
});
document.querySelectorAll('.amt').forEach(btn=>{
 btn.onclick=()=>{
 document.querySelectorAll('.amt').forEach(x=>x.style.background='#eef3ff');
 btn.style.background='#0b84ff';btn.style.color='#fff';
 }
});
