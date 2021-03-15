import React, { useState ,useContext} from 'react';
import { StyleSheet,Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import FormButton from '../components/FormButton';

const HomeScreen = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
  
    const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    };
  
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };
  
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };
  
    return (
      <View style={styles.container}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <FormButton buttonTitle='Logout' onPress={()=>{}}/>
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    );

}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex:1,
        padding:20,
    }
  });