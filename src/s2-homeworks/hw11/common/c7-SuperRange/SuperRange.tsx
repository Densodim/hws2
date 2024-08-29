import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '40%', // Устанавливаем ширину на 100% от родительского элемента
                // Стили для ползунков
                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#1976d2', // Цвет ползунка
                },
                // Стили для дорожки
                '& .MuiSlider-track': {
                    height: 4,
                },
                '& .MuiSlider-rail': {
                    height: 4,
                    backgroundColor: '#ddd', // Цвет фона
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
