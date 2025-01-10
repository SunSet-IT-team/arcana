import React from 'react';
import Select from 'react-select';
import './styles.scss';

function SelectLabel({options, placeholder, value, onChange, className}) {
    const getValue = () => {
        return value ? options.find((c) => c.value === value) : '';
    };

    const handleSelectChange = (selectedOption) => {
        onChange(selectedOption.value);
    };

    return (
        <div className={className}>
            <Select
                classNamePrefix="select"
                onChange={handleSelectChange}
                value={getValue()}
                options={options}
                isSearchable={false}
                placeholder={placeholder}
            />
        </div>
    );
}

export default SelectLabel;
