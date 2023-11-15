import { useHome } from './hooks/useHome';
import './styles/home.css';

export const Home = async () => {
    let view = `
    <h1>Home</h1>
    <section class="homeStats">
        <div class="ticketStats1">
            <h2 class="statNumber" id="statNumber1">0</h2>
            <h3 class="statDescription">Clasificaciones</h3>
        </div>

        <div class="ticketStats2">
            <h2 class="statNumber" id="statNumber2">0</h2>
            <h3 class="statDescription">KG Total</h3>
        </div>
    </section>
    `;     

    return useHome(view);
}