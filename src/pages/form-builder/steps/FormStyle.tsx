import React, { useState } from 'react';
import SubMainTitle from '../../../components/titles/SubMainTitle'
import { IoColorPaletteOutline } from 'react-icons/io5';
import RadioInput from '../../../components/inputs/RadioInput';
import SelectStyleCard from '../../../components/cards/SelectStyleCard';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/Routes';
import FilesInput from '../../../components/inputs/FilesInput';
import RegularInput from '../../../components/inputs/RegularInput';
import TextareaInput from '../../../components/inputs/TextareaInput';

// ====== data ====== //

const formStyleThemesData = [
    {id: '1', title: 'Theme 1', description: 'Clean and minimal design', color: 'var(--secondary-color)'},
    {id: '2', title: 'Theme 2', description: 'Clean and minimal design', color: 'var(--red-color)'},
    {id: '3', title: 'Theme 3', description: 'Clean and minimal design', color: 'var(--blue-color)'},
]

// ====== extra options ====== //

const AddThemeCard = () => {

    return <React.Fragment>

        <Link 
            to={ROUTES.THEMES} 
            className='
                h-full p-2.5 rounded-lg bg-[var(--white-color)] border border-[var(--blue-color)] 
                flex flex-col items-center justify-center gap-2.5 cursor-pointer
            '
        >
            <IoIosAddCircleOutline size={40} color='var(--blue-color)' />
            <p className='text-sm text-[var(--secondary-color)]'>Add Theme</p>
        </Link>

    </React.Fragment>

}

export default function FormStyle() {

    const [radioValue, setRadioValue] = useState<string | undefined>();
    const [pageIcon, setPageIcon] = useState<File[]>([]);
    const [title, setTitle] = useState<string | undefined>();
    const [description, setDescription] = useState<string | undefined>();

    const radioOptions = formStyleThemesData.map((item) => (
        {
            id: item.id, 
            label: <SelectStyleCard 
                title={item.title} 
                description={item.description} 
                color={item.color} 
                isSelected={radioValue === item.id} 
            />, 
            value: item.id
        }
    ));

    return <React.Fragment>

        <section className='w-full space-y-5 rounded-lg bg-[var(--white-color)] p-5 shadow-md'>

            <SubMainTitle title='Form Style' icon={IoColorPaletteOutline} />

            <RadioInput 
                label='Form Style' 
                description='Select a pre-designed theme or customize your own' 
                name='form-style' id='formStyle' 
                options={radioOptions}
                extraOptions={[{ id: '4', label: <AddThemeCard />}]}
                classNameOptions='
                    grid grid-cols-4 items-stretch gap-2.5 max-[860px]:grid-cols-3 
                    max-[700px]:grid-cols-2 max-[440px]:grid-cols-1
                ' 
                value={radioValue}
                onChange={(value) => setRadioValue(value)}
            />

            <FilesInput 
                id={'pageIcon'} 
                className='pt-2.5' label='Page Icon' 
                fileType='image' onFilesChange={setPageIcon} 
                value={pageIcon}
                description='Upload a website image to display with the form link.' 
            />

            <RegularInput 
                id={'title'} 
                label='Page Title' 
                placeholder='Enter the title of the form' 
                description='Add a website title to display with the form link.'
                type='text' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <TextareaInput 
                id={'description'} 
                label='Page Description' 
                placeholder='Enter the description of the form' 
                description='Add a website description to display with the form link.'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

        </section>

    </React.Fragment>

}
