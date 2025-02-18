import { useState } from 'react'
import { supabase } from '../utils/supabase-client'

export default function VideoUpload() {
  const [uploading, setUploading] = useState(false)
  const [publicUrl, setPublicUrl] = useState('')

  const uploadVideo = async (event) => {
    try {
      setUploading(true)

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `videos/${fileName}`

      // Upload durchführen
      const { error: uploadError, data } = await supabase.storage
        .from('videos')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Öffentliche URL generieren
      const { data: { publicUrl }, error: urlError } = await supabase.storage
        .from('videos')
        .getPublicUrl(filePath)

      if (urlError) throw urlError

      setPublicUrl(publicUrl)
      alert('Video erfolgreich hochgeladen!')
      console.log('Public URL:', publicUrl)

    } catch (error) {
      alert('Fehler beim Upload des Videos!')
      console.error('Upload error:', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="video/*"
        onChange={uploadVideo}
        disabled={uploading}
        className="block w-full text-sm text-gray-300
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-pink-500 file:text-white
          hover:file:bg-pink-600"
      />
      {uploading && <p className="text-pink-500">Upload läuft...</p>}
      {publicUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-300">Video URL:</p>
          <a 
            href={publicUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 break-all"
          >
            {publicUrl}
          </a>
        </div>
      )}
    </div>
  )
} 