import './index.css'
function Conteudo() {
  function cliquei(){
    alert("Concorrendo!!!")
  }
  return (
    <div className="conteudo-container">


      <div className="conteudo-imagem">

      <img className="img-logo" src="./public/images/farmarcia.png" alt="" />
      <p className="p1">Estamos entusiasmados em anunciar uma nova fase para a nossa farmácia! Com a chegada de uma nova direção</p>
      </div>
      
    <div className='conteudo-texto'>
        
        <p className="p2">Atendimento Personalizado!</p>
        <p className="p2">Ampla Variedade de Produtos!</p>
        <p className="p2">Serviços Inovadores e muito mais!</p>     
       
       
    </div>

    <div className='conteudo-footer'>

      <div className='conteudo-footer-imagem'>
      <p className="p3">Concorra a camisas exclusivas!</p>
      <p className="p3">Clique na imagem</p>
      <img className="img-seta" src="./public/images/seta.png" alt="" />
      

      </div>


      <div className='conteudo-footer-button'>

      <img onClick={cliquei} className="img-camisas" src="./public/images/farmarcia-camisas.png" alt="" />

      </div>

     
    
    
    </div>

    </div>
  )
}

export default Conteudo
