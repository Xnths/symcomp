import Image from 'next/image'

export default function PalestrantePage() {
  const palestrantes = [
    {
      nome: 'Dra. Carolina Mendes',
      ocupacao: 'Pesquisadora em Design de Interação',
      biografia:
        'Dra. Carolina atua na interseção entre tecnologia, cognição e arte. É autora de diversos artigos sobre estética computacional e práticas de design especulativo.',
      email: 'carolina.mendes@example.com',
      linkApresentacao: '/photos/valentina.JPG',
      fotoUrl: '/photos/valentina.JPG',
      fotoAlt: 'Foto da Dra. Carolina Mendes sorrindo',
      createdAt: '2025-06-11T10:23:00Z',
    },
    {
      nome: 'Prof. João Silva',
      ocupacao: 'Professor de Computação Criativa',
      biografia:
        'João pesquisa linguagens visuais e sistemas interativos para expressão artística. Leciona em cursos de computação e arte digital.',
      email: 'joao.silva@example.org',
      linkApresentacao: '/photos/valentina.JPG',
      fotoUrl: '/photos/valentina.JPG',
      fotoAlt: 'Retrato do Prof. João Silva em fundo neutro',
      createdAt: '2025-06-10T17:45:00Z',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-6">
      <form className="border rounded-2xl p-6 shadow-sm bg-white grid gap-4">
        <h2 className="text-xl font-semibold">Adicionar Palestrante</h2>

        <label className="grid">
          Nome
          <input type="text" name="nome" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Ocupação
          <input type="text" name="ocupacao" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Biografia
          <textarea name="biografia" className="border rounded p-2 mt-1" rows={4} />
        </label>

        <label className="grid">
          E-mail
          <input type="email" name="email" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Link da Apresentação
          <input type="url" name="linkApresentacao" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          URL da Foto
          <input type="url" name="fotoUrl" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Descrição da Imagem (alt)
          <input type="text" name="fotoAlt" className="border rounded p-2 mt-1" />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 mt-2"
        >
          Enviar
        </button>
      </form>
      <h2 className="text-2xl font-bold">Lista de Palestrantes</h2>
      {palestrantes.map((palestrante, index) => (
        <div
          key={index}
          className="border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-4 bg-white"
        >
          <Image
            src={palestrante.fotoUrl}
            alt={palestrante.fotoAlt}
            className="w-32 h-32 object-cover rounded-full border"
            width={100}
            height={100}
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{palestrante.nome}</h2>
            <p className="text-sm text-gray-600 mb-1">{palestrante.ocupacao}</p>
            <p className="text-sm text-gray-800 mb-2">{palestrante.biografia}</p>
            <div className="text-sm text-blue-700">
              <a href={`mailto:${palestrante.email}`} className="underline mr-4">
                {palestrante.email}
              </a>
              <a
                href={palestrante.linkApresentacao}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ver apresentação
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Criado em: {new Date(palestrante.createdAt).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
