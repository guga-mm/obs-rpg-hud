'use client';
import { useRouter } from "next/navigation";

export default function DeleteCharacter(charId: any) {
    const router = useRouter();

    const deleteCharacter = async () => {
        await fetch(`http://127.0.0.1:8090/api/collections/characters/records/${charId.charId}`, {
            method: 'DELETE'
        });

        router.refresh();
    }

    return (
        <button onClick={deleteCharacter}>Deletar</button>
    )
}
