'use client';
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function AddCharacter() {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [visivel, setVisivel] = useState(false);
    const [visibilidade, setVisibilidade] = useState(0);
    const [sucessos, setSucessos] = useState(0);
    const [falhas, setFalhas] = useState(0);

    const add = async () => {
        await fetch('http://127.0.0.1:8090/api/collections/characters/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nome,
                visible: visivel,
                visibility: visibilidade,
                success: sucessos,
                failure: falhas
            }),
        });

        setNome('');
        setVisivel(false);
        setVisibilidade(0);
        setSucessos(0);
        setFalhas(0);

        router.refresh();
    }

    return (
        <form className='character' onSubmit={add}>
            <input type="text" placeholder="Nome" required onChange={(e) => {setNome(e.target.value)}} />
            <div className='info'>
                <label className="visiblestat">
                    Visível
                    <input type="checkbox" onChange={(e) => {setVisivel(Boolean(e.target.value))}} />
                </label>
                <label className='furtividade stat'>
                    Visibilidade
                    <input type="number" onChange={(e) => {setVisibilidade(Number(e.target.value))}} />
                </label>
                <div className='testeestendido'>
                    <label className='stat'>
                        Sucessos
                        <input type="number" onChange={(e) => {setSucessos(Number(e.target.value))}} />
                    </label>
                    <label className='stat'>
                        Falhas
                        <input type="number" onChange={(e) => {setFalhas(Number(e.target.value))}} />
                    </label>
                </div>
            </div>
            <button type="submit">Incluir</button>
        </form>
    )
}