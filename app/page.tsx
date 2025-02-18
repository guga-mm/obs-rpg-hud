import UpdateStat from "./UpdateStat";
import ChangeSceneType from './ChangeSceneType';
import './style.css';
import ClearStats from './ClearStats';
import UpdateVisible from "./UpdateVisible";
import AddCharacter from "./AddCharacter";
import DeleteCharacter from "./DeleteCharacter";
import FormatHud from "./FormatHud";
import Link from "next/link";

async function getCharacters() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/characters/records?page=1&perPage=6', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

async function getScene() {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/scenes/records/000000000000000`, { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const characters = await getCharacters();
  const scene = await getScene();

  return (
    <div>
      <ChangeSceneType />
      <div className="charcontainer">
        <ClearStats characters={characters} />
        <div className='characters'>
          {characters?.map(character => {
            return <Character key={character.id} character={character} />;
          })}
          <AddCharacter />
        </div>
      </div>
      <FormatHud />
      <Link href={'./obs'}>Hud do OBS (402x646)</Link>
    </div>
  );
}

function Character({ character }: any) {
  const { id, name, visible, visibility, success, failure } = character || {};

  console.log(id);

  return (
    <div className='character'>
      <h2>{name}</h2>
      <div className='info'>
        <div className="visiblestat">
          <p>{visible ? 'Visível' : 'Ocultado'}</p>
          <UpdateVisible character={character} />
        </div>
        <div className='furtividade stat'>
          <p>Visibilidade: {visibility}</p>
          <UpdateStat character={character} stat='visibility' />
        </div>
        <div className='testeestendido'>
          <div className='stat'>
            <p>Successos: {success}</p>
            <UpdateStat character={character} stat='success' />
          </div>
          <div className='stat'>
            <p>Falhas: {failure}</p>
            <UpdateStat character={character} stat='failure' />
          </div>
        </div>
      </div>
      <DeleteCharacter charId={id} />
    </div>
  )
}