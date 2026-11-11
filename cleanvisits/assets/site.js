
document.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
const pt=document.documentElement.lang==='pt-BR';
const name=document.querySelector('#client-name'), day=document.querySelector('#visit-day'), time=document.querySelector('#visit-time');
function updateTemplates(){const n=name?.value.trim()||(pt?'[nome]':'[name]'),d=day?.value.trim()||(pt?'[dia]':'[day]'),t=time?.value.trim()||(pt?'[horário]':'[time]');document.querySelectorAll('[data-template]').forEach(el=>{el.value=el.dataset.template.replaceAll('{name}',n).replaceAll('{day}',d).replaceAll('{time}',t);});}
[name,day,time].filter(Boolean).forEach(el=>el.addEventListener('input',updateTemplates));if(name)updateTemplates();
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{const field=document.getElementById(b.dataset.copy),status=b.nextElementSibling;try{await navigator.clipboard.writeText(field.value);status.textContent=pt?'Copiado. Revise antes de enviar.':'Copied. Review before sending.';}catch{field.focus();field.select();status.textContent=pt?'Selecione e copie o texto acima.':'Select and copy the text above.';}}));
