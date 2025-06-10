export const agregarModeloFragment = document
  .createRange()
  .createContextualFragment(
    `
    <style>
        #main-agregarModelo {
        padding: 12px 24px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-height: 500px;
      }

      details {
        padding: 10px;
        width: 100%;
      }

      details[open] {
        background-color: rgb(223, 223, 223);
        border-radius: 8px;
      }

      form {
        padding: 10px 20px;

        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
        background-color: #f5f5f5;

        button {
          padding: 10px 30px;
          margin-left: auto;
          width: 30%;
          border-radius: 8px;
          border: solid transparent 2px;
          font-weight: 600;
          transition: all 0.2s ease-in;
          &:hover {
            border: solid rgb(0, 0, 0) 2px;
            background-color: #70a1e9;
            color: white;
          }
        }
      }
      
      .input-box{
        width: 100%;
        display: flex;
        gap: 30px;
        align-items: end; 
      }

      label,select,input{
        padding: 6px 10px;
      }
      label{
        width: 20%;
        font-weight: 500;
        font-size: 20px;


      }
      select,input{
        text-align: center;
        height:50px; 
        width: 40%;
        max-widt: 250px;
        border-radius: 8px;
      }

      .div-agregarMarca {
        min-height: 60px;
        padding: 0px 20px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      #input-agregarMarca {
        padding: 0;
        width: 30%;
        height: 40px;
        text-align: center;
      }

      #button-agregarMarca {
        margin: 0;
        width: max-content;
      }

      

      @media (max-width: 800px) {
        label{
          width: 30%;
          font-size: 18px;
        }
        select,input{
          width: 46%;
          font-size: 16px;
        }
      }

      @media (max-width: 490px) {
        .input-box{
          flex-direction: column;
        }
        label{
          width: 100%;
          font-size: 18px;
        }
        select,input{
          width: 100%;
          font-size: 16px;
        }

        label{
          font-size: 18px;
        }
      }

    </style>
     <main id="main-agregarModelo">
          <h3>Agregar Modelo</h3>
          <form action="" id="form-modelo">
            <div class="input-box">
              <label for="marca">Seleccione Marca</label>
              <select name="selectMarca" id="select_marca"></select>
            </div>

            <div class="input-box">
              <details>
                <summary>Marca No existe</summary>
                <div class="div-agregarMarca">
                  <input
                    type="text"
                    placeholder="Toyota"
                    id="input-agregarMarca"
                    name="marca"
                  />
                  <button id="button-agregarMarca">agregar</button>
                </div>
              </details>
            </div>

            <div class="input-box">
              <label for="modelo">Agregar Modelo</label>
              <input type="text" id="modelo" name="modelo"/>
            </div>
            <button id="button-agregarModelo" type="submit">Agregar</button>
          </form>
        </main>
    `
  );
