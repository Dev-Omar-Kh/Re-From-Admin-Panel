// ====== MainBtn ====== //

export type MainBtnProps = {
    title?: string;
    isSmall?: boolean;
    icon?: React.ElementType;
    isPrimary?: boolean;
    isSecondary?: boolean;
    isDanger?: boolean;
    start?: boolean;
    end?: boolean;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
}

// ====== TriggerBtn ====== //

export type Trigger = {
    label: string;
    value: number;
}

export type TriggerBtnProps = {
    triggers: Trigger[];
    onTriggerChange: (value: number) => void;
    defaultValue?: number;
    className?: string;
}

// ====== FormCard ====== //

export type FormCardProps = {
    data: {
        id: number;
        image: string;
        status: string;
        primaryColor: string;
        title: string;
        createdAt: string;
        EndAt: string;
        users: number;
        responses: number;
    }
}

export type IconLabelProps = {
    icon: React.ElementType;
    label: string | React.ReactNode;
}

// ====== StatisticsCard ====== //

export type StatisticsCardProps = {
    title: string;
    value: number;
}

// ====== StatusCard ====== //

export type StatusCardProps = {
    className: string;
    title: string;
}

// ====== PopUp ====== //

export type PopUpProps = {
    children: React.ReactNode;
    onClose: () => void;
}

// ====== Stepper ====== //

export type StepperProps = {
    steps: string[];
    currentStep: number;
}

// ====== Table ====== //

export type Column<T> = {
    header: React.ReactNode;
    cell: (item: T) => React.ReactNode;
    type?: 'text' | 'number' | 'date' | 'status';
};

export type TableProps<T> = {
    data: T[];
    columns: Column<T>[];
};

// ====== DateTd ====== //

export type DateTdProps = {
    date?: string
    time?: string
    isSmall?: boolean
}

// ====== NumbersTd ====== //

export type NumbersTdProps = {
    number: number;
    format?: "default" | "formatted" | "compact";
};

// ====== TextTd ====== //

export type TextTdProps = {
    text: string;
    isSmall?: boolean;
}

// ====== Forms ====== //

export type FormData = {
    id: number;
    image: string;
    status: 'Active' | 'Inactive' | 'Closed';
    primaryColor: string;
    title: string;
    createdAt: string;
    EndAt: string;
    users: number;
    responses: number;
};

// ====== SubMainTitle ====== //

export type SubMainTitleProps = {
    title: string;
    icon: React.ElementType;
}

// ====== Label ====== //

export type LabelProps = {
    id: string;
    label: string;
    description?: string;
}

// ====== ErrorField ====== //

export type ErrorFieldProps = {
    error: string;
}

// ====== RadioInput ====== //

export type RadioInputProps = {
    id: string;
    label: string;
    description?: string;
    name: string;
    options: {
        id: string;
        label: React.ReactNode;
        value: string;
    }[];
    extraOptions?: {
        id: string;
        label: React.ReactNode;
    }[];
    classNameOptions: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
}

// ====== SelectStyleCard ====== //

export type SelectStyleCardProps = {
    title: string;
    description: string;
    color: string;
    isSelected?: boolean;
}

// ====== FilesInput ====== //

export type FileType = 'image' | 'video' | 'document' | 'audio' | 'any' | 'multiple';

export type FileTypeConfig = {
    icon: React.ElementType;
    text: string;
    acceptedTypes: string;
    maxSize?: number; // in MB
};

export type FilesInputProps = {
    id: string;
    fileType: FileType;
    onFilesChange: (files: File[]) => void;
    maxFiles?: number;
    className?: string;
    disabled?: boolean;
    showPreview?: boolean;
    customConfig?: Partial<FileTypeConfig>;
    label: string;
    description?: string;
    allowMultiple?: boolean;
    value?: File[];
}

// ====== RegularInput ====== //

export type RegularInputProps = {
    id: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    error?: string;
    className?: string;
    disabled?: boolean;
    autoComplete?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    readOnly?: boolean;
    description?: string;
};

// ====== TextareaInput ====== //

export type TextareaInputProps = {
    id: string;
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    isRequired?: boolean;
    error?: string;
    className?: string;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    readOnly?: boolean;
    description?: string;
    rows?: number;
    cols?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
};