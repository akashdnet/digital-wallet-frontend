import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ExistDBImage({onDBImageUrl, dbImageUrl}:any) {
  const handleRemove = () => {
      onDBImageUrl(null)
  }
  return (
    <div className="relative">
      <img src={dbImageUrl} className="w-full h-44 object-contain rounded-md" />
      <Button
        onClick={handleRemove}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 cursor-pointer"
      >
        <X size={16} />
      </Button>
    </div>
  )
}
