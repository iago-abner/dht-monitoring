
interface Data {
  value: string,
  date: string,
  id: number
}

async function getData(){
  const res = await fetch('http://localhost:3000/api/temp')
  return res.json()
}

export default async function Dashboard(){
  const data: Array<Data> = await (getData());
  return(
    <div>
      <ul>
        {data.map((temp) => {
          return(
          <li key={temp.id}><span>date: {temp.date}</span> temp:{temp.value}</li>
          )
        })}
      </ul>
    </div>
  )
}