require 'date'

def blindMice(mice)
    #'~' if this symbol is to the right of  the letter M (mice) but to
    # the left of the letter C (cheese) then that mouse is walking away
    # from the cheese
    # We are counting the number of blind mice (they should be walking away from C)

    left = mice.split("C")[0]
    right = mice.split("C")[1]

    left_count = left.scan("M~")
    right_count = right.scan("~M")

    return left_count.count() + right_count.count()

end

def ticTacToe(grid)
    #each line is broken up using /n
    #space represents a open spot on the grid
    #count the number of empty spaces where if 'X' were to be placed 'X' would win
    #count the number of empty spaces where if 'O' were to be placed 'O' would win
    #put them into an array and return that array

    winner = [0, 0]



    return winner
end

def race_winner(racer-time)

    #racer-time is an array of objects that have key-value pairs
    #the objects not in order of fastest time to slowest time
    #"dnf" means did not finish and if all are dnf then "There is no winner"

    new_arr = []
    fastest_time = 0
    
    racer_time.each do |obj|
        new_arr << obj[:time]
    end


    greatest = 0
    new_arr.each_with_index do |time, idx|
        new_arr.each_with_index do |time2, idx2|
            if idx != idx2 && time != "dnf" && time2 != "dnf"
                d1 = DateTime.parse(new_arr[idx],"%H%M%S")
                d2 = DateTime.parse(new_arr[idx2],"%H%M%S")
                if d1 < d2 
                    greatest = idx2 
                end
            end
            #new_arr = ['05:42:14', '05:12:53', 'dnf']
            
        end 
    end

   if new_arr.all?("dnf")
       return "There is no winner"   
   elsif new_arr.one?("")
       return `#{racer_time[greatest][:name]} won by no contest`
   else
       return `#{racer_time[greatest][:name]} won by #{} hours, #{} minutes, and #{} seconds`
   end
end