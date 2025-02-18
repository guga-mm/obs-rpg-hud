'use client';

import { FormEvent, useState } from "react";

export default function FormatHud() {
    const [url, setUrl] = useState('');
    const [cor, setCor] = useState('');

    const submit = async (e: FormEvent) => {
        e.preventDefault();

        if (cor != '') await fetch('http://127.0.0.1:8090/api/collections/hud/records/000000000000000', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                color: cor
            })
        });

        if (url != '') await fetch('http://127.0.0.1:8090/api/collections/hud/records/000000000000000', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: url
            })
        });

        setUrl('');
        setCor('');
    }

    return (
        <form className="character" onSubmit={(e) => {submit(e)}}>
            <p>Mantenha em branco para manter o atual</p>
            <label className="stat">
                URL do fundo
                <input type="text" onChange={(e) => {setUrl(e.target.value)}} />
            </label>
            <label className="stat">
                Cor do texto (HEX sem o #)
                <input type="text" onChange={(e) => {setCor(e.target.value)}} />
            </label>
            <button type="submit">Salvar</button>
        </form>
    )
}