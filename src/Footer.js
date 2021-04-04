export default function Footer(){

const data = new Date().getFullYear();

    return(
        <div className='footer'>
        <h4>
        © Enjoy Programming with me {data}
        </h4>
        </div>
    )
}