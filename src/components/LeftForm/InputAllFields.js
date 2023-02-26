import React, { Fragment, useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { useForm, Controller, useFormState, useFieldArray } from "react-hook-form";
import { NamelValidation, TextAreaValidation } from "./Validation";
import { EmaillValidation } from "./Validation";
import { PasswordValidation } from "./Validation";
import InputSelect from "./InputSelect";
import InputCheckbox from "./InputCheckbox";
import RadioButton from "./RadioButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const InputFieldName = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      multipleInput: [{ input: '' }],
    },
  });
  const { errors } = useFormState({
    control,
  });

  const onSubmit = (data) => {
    console.log(data)
    alert(JSON.stringify(data))
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "multipleInput"
  });

  const item = [
    {
      id: 'one',
      element: (<><Typography sx={{ fontWeight: 'bold' }} pt={3} mb={2}>Input field</Typography>
        <Controller
          control={control}
          name="name"
          rules={NamelValidation}
          render={({ field }) => (
            <TextField
              required
              id="fieldname"
              label="Your name"
              variant="outlined"
              name="name"
              fullWidth
              onChange={field.onChange}
              value={field.value}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
          )}
        /></>
      )
    }, {
      id: 'two',
      element: (<>
        <Typography pt={3} mb={2} sx={{ fontWeight: 'bold' }}>
          Input field
        </Typography>

        <Controller
          control={control}
          name="email"
          rules={EmaillValidation}
          render={({ field }) => (
            <TextField
              required
              label="Email"
              variant="outlined"
              name="email"
              fullWidth
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              InputProps={{
                endAdornment: <EmailIcon />,
              }}
            />
          )}
        />
      </>
      )
    }, {
      id: 'three',
      element: (
        <>
          <Typography pt={3} mb={2} sx={{ fontWeight: 'bold' }}>
            Input field
          </Typography>

          <Controller
            control={control}
            name="password"
            rules={PasswordValidation}
            render={({ field }) => (
              <TextField
                required
                type="password"
                label="Password"
                variant="outlined"
                name="password"
                autoComplete="new-password"
                fullWidth
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: <KeyIcon />,
                }}
              />
            )}
          />
        </>
      )

    }, {
      id: 'four',
      element: (<Controller
        control={control}
        name="select"
        rules={{ required: "required" }}
        render={({ field }) => (
          <InputSelect
            error={errors.textarea?.message}
            onChange={(e) => field.onChange(e)}
            value={field.value}

          />
        )}
      />

      )

    }, {
      id: 'five',
      element: (

        <Controller
          control={control}
          name="checkbox"
          rules={{ required: true }}
          defaultValue={{ value1: false, value2: false, value3: false }}
          render={({
            field: { onChange, onBlur, value, name, ref },

          }) => (
            <InputCheckbox
              required
              onBlur={onBlur}
              onChange={onChange}
              checked={value}
              value={value}
              inputRef={ref}
            />
          )}
        />
      )
    }, {
      id: 'six',
      element: (
        <>
          <Typography pt={3} mb={2} sx={{ fontWeight: 'bold' }}>
            Text area
          </Typography>

          <Controller
            control={control}
            name="textarea"
            rules={TextAreaValidation}
            render={({ field }) => (
              <>
                <TextField
                  multiline
                  required
                  id="outlined-basic1"
                  label="Text area"
                  variant="outlined"
                  name="textarea"
                  minRows={4}
                  fullWidth
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={!!errors.textarea?.message}
                  helperText={errors.textarea?.message}
                  maxLength={20}
                  placeholder="Text area"
                  inputprops={{
                    style: {
                      fontFamily: "Roboto",
                    },
                  }}
                />
              </>
            )}
          />
        </>

      )

    }, {
      id: 'seven',
      element: (
        <Controller
          control={control}
          name="radio"
          rules={{ required: true }}
          render={({
            field: { onChange, onBlur, value, name, ref },

          }) => (
            <RadioButton
              required
              onBlur={onBlur}
              onChange={onChange}
              checked={value}
              inputRef={ref}
            />
          )}
        />
      )
    }, {
      id: 'eight',
      element: (
        <>
          {fields.map((item, index) => (
            <Fragment key={index}>
              <Controller
                rules={{ input: { required: true } }}
                render={({ field, index }) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", marginTop: 4, marginBottom: 3 }}
                  >
                    <TextField
                      required
                      id="outlined-basic1"
                      label="Text area"
                      variant="outlined"
                      name={`multipleInput.${index}.input`}
                      minRows={4}
                      fullWidth
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.multipleInput?.message}
                      helperText={errors.multipleInput?.message}
                    />
                  </Box>
                )}
                name={`multipleInput.${index}.input`}
                control={control}
              />

              {fields.length > 1 && (
                <Button
                  type="button"
                  value="remove"
                  variant="contained"
                  disableElevation={true}
                  onClick={() => remove(index)}
                  sx={{
                    width: "80px",
                    height: "30px",
                    marginLeft: 2,
                    marginBottom: 2,
                    borderRadius: "40px",
                  }}
                >
                  Remove
                </Button>
              )}
            </Fragment>
          ))}
          <Button
            type="button"
            value="add"
            variant="contained"
            disableElevation={true}
            onClick={() => append({ input: "" })}
            sx={{
              width: "50px",
              marginRight: 3,
              marginLeft: 2,
              marginBottom: 2,
              height: "30px",
              borderRadius: "40px",
            }}
          >
            Add
          </Button>
        </>
      )
    }
  ]


  function handleOnDragEnd(result) {
    const [reorderedItem] = item.splice(result.source.index, 1);
    console.log(reorderedItem)
    item.splice(result.destination.index, 0, reorderedItem);
  }



  return (

    <div className="auth-form">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="inputs">
          {(provided) => (
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)} {...provided.droppableProps} ref={provided.innerRef} >
              {
                item.map((el, index) => {
                  return (
                    <Draggable key={el.id} draggableId={el.id} index={index}>
                      {(provided) => (

                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          {
                            el.element
                          }
                        </li>
                      )}
                    </Draggable>
                  )
                })
              }
              {provided.placeholder}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disableElevation={true}
                sx={{
                  width: "400px",
                  height: "50px",
                  marginTop: 2,
                  borderRadius: "40px",
                }}
              >
                Submit
              </Button>


            </form>

          )}
        </Droppable>
      </DragDropContext>


    </div>
  );
};

export default InputFieldName;